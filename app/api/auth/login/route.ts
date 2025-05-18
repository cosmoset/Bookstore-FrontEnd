import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Forward request to Laravel backend
    const response = await fetch('http://localhost:8001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Login failed' },
        { status: response.status }
      );
    }

    // Store the token in an HTTP-only cookie
    const headers = new Headers();
    headers.append('Set-Cookie', `token=${data.token}; Path=/; HttpOnly; SameSite=Strict`);

    return NextResponse.json(
      { message: 'Login successful', user: data.user },
      { 
        status: 200,
        headers
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 