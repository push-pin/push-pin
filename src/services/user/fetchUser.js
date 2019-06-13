export const fetchUser = (auth0Id) => {
  if(auth0Id === 'auth0|5d0279498cbc280c6b582e21') {
    return {
      userType: 'Teacher',
      _id: '1234567890',
      username: 'Jared',
      image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj_-4i0gufiAhWMvJ4KHXudBPYQjRx6BAgBEAU&url=https%3A%2F%2Fjroesch.github.io%2F&psig=AOvVaw0dqhROODl2O4mX5rykcdA_&ust=1560534559714629',
    };
  } else {
    return {
      userType: 'Student',
      _id: '1234567890',
      username: 'Megan',
      image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj_-4i0gufiAhWMvJ4KHXudBPYQjRx6BAgBEAU&url=https%3A%2F%2Fjroesch.github.io%2F&psig=AOvVaw0dqhROODl2O4mX5rykcdA_&ust=1560534559714629',
    };
  }
};
