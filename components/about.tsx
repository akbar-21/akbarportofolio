"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Phone, Mail, Linkedin, MapPin } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                <Phone size={20} className="mr-2" />
                <span>081266676357</span>
              </div>
              <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                <Mail size={20} className="mr-2" />
                <span>akbarsuderajad@gmail.com</span>
              </div>
              <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                <Linkedin size={20} className="mr-2" />
                <span>linkedin.com/akbarsuderajad</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin size={20} className="mr-2" />
                <span>Bengkulu, Indonesia</span>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Saya adalah lulusan Program Studi Sistem Informasi Universitas Bengkulu dengan IPK 3,73. Memiliki ketertarikan dan keahlian di bidang teknologi informasi, desain grafis, editing, serta troubleshooting perangkat PC/laptop.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Saya menguasai manajemen basis data, pengembangan aplikasi, dan pemrograman dasar. Pengalaman magang serta keterlibatan aktif dalam organisasi kemahasiswaan telah membantu saya mengasah keterampilan teknis dan kreativitas secara berkelanjutan.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Saya pribadi yang memiliki semangat belajar tinggi, adaptif, dan siap memberikan kontribusi terbaik dalam dunia kerja profesional.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
