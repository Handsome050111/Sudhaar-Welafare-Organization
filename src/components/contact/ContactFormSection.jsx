import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactFormSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // 1. Send to OWNER
    emailjs.sendForm(
      'service_97jy8w4',
      'template_0csgbmp', // OWNER template
      form.current,
      '0Es1l5NvTvswMvolz'
    )
      .then(() => {
        // 2. Send AUTO-REPLY
        return emailjs.sendForm(
          'service_97jy8w4',
          'template_5u5tsae',
          form.current,
          '0Es1l5NvTvswMvolz'
        );
      })
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        reset(); // Reset form managed by react-hook-form
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        console.error(error);
      });
  };

  return (
    <section className="section bg-white pt-4 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden">

          {/* Contact Form */}
          <div className="p-8 md:p-12 lg:p-14 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you shortly.
            </p>

            {/* Feedback Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in-up">
                <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-green-800 font-semibold">Message Sent!</h4>
                  <p className="text-green-700 text-sm mt-1">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in-up">
                <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-red-800 font-semibold">Failed to Send</h4>
                  <p className="text-red-700 text-sm mt-1">Please ensure your details are correct or try again later.</p>
                </div>
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.user_name ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'} focus:ring-2 transition-all duration-200 focus:outline-none bg-gray-50 focus:bg-white`} 
                    placeholder="Full Name" 
                    {...register("user_name", { 
                      required: "Full Name is required",
                      minLength: { value: 3, message: "Name must be at least 3 characters long" }
                    })} 
                  />
                  {errors.user_name && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.user_name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.user_email ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'} focus:ring-2 transition-all duration-200 focus:outline-none bg-gray-50 focus:bg-white`} 
                    placeholder="Email Address" 
                    {...register("user_email", { 
                      required: "Email Address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    })} 
                  />
                  {errors.user_email && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.user_email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`w-full px-4 py-3 rounded-lg border ${errors.user_subject ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'} focus:ring-2 transition-all duration-200 focus:outline-none bg-gray-50 focus:bg-white`} 
                  placeholder="How can we help?" 
                  {...register("user_subject", { required: "Subject is required" })} 
                />
                {errors.user_subject && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.user_subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-primary/20 focus:border-primary'} focus:ring-2 transition-all duration-200 focus:outline-none bg-gray-50 focus:bg-white resize-none`} 
                  placeholder="Write your message here..."
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters long" }
                  })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full flex items-center justify-center gap-2 text-lg py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto w-full relative order-1 lg:order-2 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0892897716217!2d72.34481727451498!3d33.88735417321963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df19000e09a603%3A0xb324be80292aa471!2sSudhaar%20welfare%20organization!5e0!3m2!1sen!2s!4v1775807220170!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sudhaar Welfare Organization Location"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
