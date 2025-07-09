import User from '../models/User.js'; // Correct import

export async function handleGoogleLogin(googlePayload) {
  const { sub, email, name, given_name, family_name, picture } = googlePayload;

  try {
    // Rename variable to avoid conflict with the model name
    let existingUser = await User.findOne({ googleId: sub });

    if (existingUser) {
      console.log('✅ User already exists:', existingUser.email);
      return existingUser;
    }

    // Rename the new user variable to `newUser`
    let newUser = await User.create({
      googleId: sub,
      email,
      name,
      firstName: given_name,
      lastName: family_name,
      picture
    });

    console.log('🎉 New user created:', newUser.email);
    return newUser;

  } catch (err) {
    console.error('❌ Error saving user:', err);
    throw err;
  }
}
