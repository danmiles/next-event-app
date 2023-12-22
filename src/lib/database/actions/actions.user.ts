'use server';
// Connect to MongoDB
import { connectToDatabase } from '@/lib/database/index';
// Models
import User from '@/lib/database/models/user.model';
// Types
import { CreateUserParams } from '@/types/index';
// handleError function
import { handleError } from '@/lib/utils';

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser))

  } catch (error) {
    handleError(error);
  }
}
