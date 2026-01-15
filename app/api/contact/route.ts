import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('messagedata'); // Database name
        const collection = db.collection('contacts'); // Collection name

        // Create contact document
        const contactDocument = {
            name,
            email,
            phone: phone || null,
            subject,
            message,
            createdAt: new Date(),
            status: 'new', // You can use this to track if you've responded
        };

        // Insert the document
        const result = await collection.insertOne(contactDocument);

        return NextResponse.json(
            {
                success: true,
                message: 'Contact form submitted successfully',
                id: result.insertedId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return NextResponse.json(
            { error: 'Failed to submit contact form' },
            { status: 500 }
        );
    }
}
