
import React from 'react';
import { dummyData } from '../data/dummy';

const Footer: React.FC = () => {
  const { footer } = dummyData;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-extrabold text-white font-display mb-6">
              Medica<span className="text-medical-500">Corp</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              {footer.description}
            </p>
            <div className="flex gap-4">
              {footer.socials.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-600 transition-colors">
                  <span className="text-xs font-bold uppercase">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Link Cepat</h4>
            <ul className="space-y-4">
              {footer.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-medical-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-medical-500 font-bold">A:</span>
                <span>{footer.contact.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-medical-500 font-bold">E:</span>
                <span>{footer.contact.email}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-medical-500 font-bold">T:</span>
                <span>{footer.contact.phone}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Jam Operasional</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>Senin - Jumat</span>
                <span className="text-medical-400">08:00 - 21:00</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span>Sabtu</span>
                <span className="text-medical-400">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>IGD</span>
                <span className="text-emerald-400 font-bold uppercase">24 Jam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {footer.brand}. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
