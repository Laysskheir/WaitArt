// // "use server"


// // notificationController.js
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export const sendNotificationToUsers = async () => {
//   try {
//     // Query users who are on the Free plan and haven't been notified yet
//     const users = await prisma.user.findMany({
//       where: {
//         notified: false,
//       },
//     });

//     // Loop through users and send notifications
//     users.forEach(async user => {
//       // Send notification logic here (e.g., email, push notification)
//       // For example, you can use a third-party service or send emails directly using a library like nodemailer
//       console.log(`Sending notification to user ${user.id}`);

//       // Update user's notified status in the database
//       await prisma.user.update({
//         where: { id: user.id },
//         data: { notified: true },
//       });
//     });
//   } catch (error) {
//     console.error('Error sending notifications:', error);
//   }
// };

