"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Education</h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <GraduationCap className="h-8 w-8 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">S-1 Sistem Informasi</h3>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Universitas Bengkulu</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Jul 2019 - Dec 2024</p>
                  <div className="flex items-center mb-4">
                    <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">IPK:</span>
                    <span className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      3.73/4.00
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Aktif dalam mengikuti organisasi seperti Himpunan Mahasiswa dan Badan Eksekutif Mahasiswa.</li>
                    <li>
                      Berpartisipasi dalam berbagai lomba dan kompetisi yang diadakan baik tingkat universitas maupun
                      nasional.
                    </li>
                    <li>
                      Menyelesaikan Tugas akhir skripsi dengan topik "Analisis penerimaan dan kepuasan aplikasi m.tix
                      menggunakan model UTAUT 2 dan EUCS".
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
