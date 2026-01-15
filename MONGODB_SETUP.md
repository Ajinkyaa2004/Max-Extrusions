# MongoDB Contact Form Integration

## Overview
The contact form on this website is connected to MongoDB Atlas to store all form submissions.

## Database Details
- **Database Name**: `messagedata`
- **Collection Name**: `contacts`
- **Connection**: MongoDB Atlas

## Environment Variables
The MongoDB connection string is stored in `.env.local`:
```
MONGODB_URI=mongodb+srv://dhumalajinkya2004_db_user:c2wNb2vvBfdkCK0w@messagedata.7sbb6w6.mongodb.net/?appName=MessageData
```

## Data Structure
Each contact form submission is stored with the following fields:
- `name` (string, required)
- `email` (string, required)
- `phone` (string, optional)
- `subject` (string, required)
- `message` (string, required)
- `createdAt` (Date, auto-generated)
- `status` (string, default: "new")

## How to View Submissions
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Log in with your credentials
3. Navigate to your cluster: **MessageData**
4. Click on "Browse Collections"
5. Select database: **messagedata**
6. Select collection: **contacts**
7. You'll see all form submissions with timestamps

## API Endpoint
- **URL**: `/api/contact`
- **Method**: POST
- **Content-Type**: application/json
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91-1234567890",
    "subject": "Inquiry",
    "message": "Your message here"
  }
  ```

## Security Notes
- The `.env.local` file is gitignored to keep credentials secure
- IP address is set to `0.0.0.0/0` (allow from anywhere) - consider restricting this in production
- Email validation is performed on the server side
- All required fields are validated before saving

## Testing
To test the contact form:
1. Navigate to the contact page
2. Fill in the form fields
3. Click "Send Message"
4. Check MongoDB Atlas to verify the data was saved
