import { ErrorType, returnNextError } from '@/lib/api/error'
import { NextResponse } from 'next/server'

function GET() {
    return returnNextError({
        type: ErrorType.NotFound,
        message: 'This endpoint does not exist.',
        docs: {
            title: 'API Documentation',
            url: 'https://docs.mindplanr.com/',
        },
    })
}

export { GET as DELETE, GET, GET as PUT }