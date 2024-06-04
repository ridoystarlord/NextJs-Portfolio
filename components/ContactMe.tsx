import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactMe() {
  return (
    <section id="contactme">
      <div className="relative bg-[#2B2D33] py-5 text-white md:py-20">
        <div className="container md:px-0">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-orange-500">
              Contact Me
            </h2>
            <h3 className="mt-2 text-4xl font-bold">I Want To Hear From You</h3>
            <p className="mt-4 text-gray-400">
              Please fill out the form on this section to contact with me Or
              call between 10:00 a.m. and 11:00 p.m. BST
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="col-span-1 space-y-10 md:col-span-2">
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-[#fedfd7] p-3 md:p-6">
                  <MapPin className="text-orange-500" size={48} />
                </div>
                <div className="space-y-1">
                  <h2 className="text-3xl font-semibold">Location</h2>
                  <p className="text-gray-400">Tangail, Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-[#ddf5e6] p-3 md:p-6">
                  <Mail className="text-green-500" size={48} />
                </div>
                <div className="space-y-1">
                  <h2 className="text-3xl font-semibold">Email</h2>
                  <p className="text-gray-400">ridoy.starlord@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-[#ece8fd] p-3 md:p-6">
                  <Phone className="text-purple-500" size={48} />
                </div>
                <div className="space-y-1">
                  <h2 className="text-3xl font-semibold">Phone</h2>
                  <p className="text-gray-400">+8801785706971</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Input
                    placeholder="Your Name"
                    className="bg-transparent py-6"
                    placeholderSize="lg"
                  />
                  <Input
                    placeholder="Your Email"
                    className="bg-transparent py-6"
                    placeholderSize="lg"
                  />
                  <Input
                    placeholder="Your Phone"
                    className="bg-transparent py-6"
                    placeholderSize="lg"
                  />
                  <Input
                    placeholder="Your Subject"
                    className="bg-transparent py-6"
                    placeholderSize="lg"
                  />
                  <Textarea
                    className="col-span-1 bg-transparent md:col-span-2"
                    placeholder="Your Message"
                    rows={8}
                    placeholderSize="lg"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full rounded-2xl bg-orange-600 hover:bg-orange-500 md:w-auto"
                  type="submit"
                >
                  Submit Now
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 hidden md:block">
          <img src="/contact-bg-1.png" alt={`Background Icon`} />
        </div>
        <div className="absolute bottom-5 right-5 hidden md:block">
          <img src="/contact-bg-2.png" alt={`Background Icon`} />
        </div>
      </div>
    </section>
  );
}
