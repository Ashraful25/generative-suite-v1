"use client"

import { Heading } from '@/components/heading';
import { PenBoxIcon } from 'lucide-react';
import React, { useEffect } from 'react';

const FeedbackPage = () => {
  useEffect(() => {
    // Replace 'your-embed-code' with the actual Google Form embed code
    const embedCode = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRoU07wMB5ZPd68zmqjTvhlLAiUu67XLgiEHcW9xD2zQxr_A/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0"></iframe>';

    // Get the container element
    const container = document.getElementById('google-form-container');

    // Inject the Google Form into the container
    if (container) {
      container.innerHTML = embedCode;
    }
  }, []);

  return (
    <div>
      <Heading
        title="Feedback"
        description="Please share your valuable feedback about the website"
        icon={PenBoxIcon}
        iconColor="text-blue-500"
        bgColor="bg-blue-500/10"
      />
      <div className="px-4 lg:px-8" style={{ maxWidth: '1200px' }}>
        <div id="google-form-container"></div>
      </div>
    </div>
  );
};

export default FeedbackPage;
