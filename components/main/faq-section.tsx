import React from "react";

export default function FAQSection() {
  return (
    <div>
      <h1 className="text-center my-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        FAQ
      </h1>
      <div className="grid grid-cols-2 gap-6 mx-6 p-4">
        <div>
          <h1 className="font-bold text-2xl mb-4">What is WaitArt Pro?</h1>
          <p>
            WaitArt Pro is a subscription to unlock all features in the website
            creation and customization tool. You can create and customize
            waitlists quickly in 30 seconds using the WaitArt editor.
          </p>
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-4">What is WaitArt API?</h1>
          <p>
            WaitArt API helps you dynamically generate images for various use case.
            You get multiple Image Generation API templates, you just pass the
            data from your app's backend and WaitArt API will generate the image
            for you
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-4">
            Can I get a refund for my subscription?
          </h1>
          <p>
            Yes, you can get a refund for your subscription if you send an email
            about it before 1 day from the day you made the payment
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-4">
            Can I cancel my subscription?
          </h1>
          <p>
            Yes, you can cancel your subscription anytime. You can click on your
            profile icon on top right and click on 'Manage Subscription'
          </p>
        </div>
      </div>
    </div>
  );
}
