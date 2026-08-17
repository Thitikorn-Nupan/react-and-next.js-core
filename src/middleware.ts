import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

/**
 Middleware in API routes are reuseable functions executed before the main request handler logic.
 These functions are commonly used for tasks like authentication, logging, rate limiting, input validation,
 or other pre-processing tasks. Middleware will help you centralize common logic and ensure consistency across multiple API routes.
*/

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // Example: Check for an auth cookie
    const headerKey = request.headers.get('apiKey')
    const queryParamKey = request.nextUrl.searchParams.get('apiKey')
    const apiKey = process.env.API_KEY
    if (headerKey !== apiKey || queryParamKey !== apiKey) {
        return NextResponse.json(
            {message: 'Authentication required'},
            {status: 401}
        )
    } else {
        // continue response of your api
        return NextResponse.next()
    }
}

// Optional: Configure which paths the middleware runs on
export const config = {
    matcher: '/api/student.v4', // all req tru /api/student.v4/** /api/student.v4 will do middleware function first
}