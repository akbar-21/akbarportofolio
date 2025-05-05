"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Users } from "lucide-react"

const workExperience = [
  {
    title: "Staff IT - Magang",
    company: "SD N 69 Kota Bengkulu",
    period: "Aug 2021 - Dec 2021",
    description: [
      "Mengembangkan sistem absensi online sederhana yang digunakan oleh 30+ siswa dan guru.",
      "Menangani 20+ kasus troubleshooting perangkat keras dan lunak dengan tingkat penyelesaian tinggi.",
      "Membantu input dan pengelolaan data 50+ siswa ke dalam sistem sekolah.",
    ],
    type: "work",
  },
  {
    title: "Staff IT - Magang",
    company: "SMP N 1 Kota Bengkulu",
    period: "Feb 2022 - Jun 2022",
    description: [
      "Menangani 20+ kasus troubleshooting komputer dan jaringan selama masa tugas.",
      "Mendampingi 10+ guru dan staf dalam menyelesaikan masalah teknis perangkat IT.",
      "Mengembangkan sistem ujian online sederhana yang digunakan oleh 50+ siswa.",
    ],
    type: "work",
  },
  {
    title: "Anggota Kominfo",
    company: "Himpunan Mahasiswa Sistem Informasi (HIMASIF) - UNIB",
    period: "Dec 2020 - Oct 2021",
    description: [
      "Mendesain 2–3 pamflet dan postingan Instagram feed setiap minggu untuk berbagai kegiatan organisasi.",
      "Mengelola dan memantau akun media sosial HIMASIF untuk menjaga konsistensi dan keteraturan posting.",
      "Membuat dan mempublikasikan Instagram Story untuk lebih dari 10 kegiatan HIMASIF.",
    ],
    type: "organization",
  },
  {
    title: "Kepala Bidang Eksternal",
    company: "Himpunan Mahasiswa Sistem Informasi - UNIB",
    period: "Nov 2021 - Dec 2022",
    description: [
      "Mengatur dan mengarahkan 3 kepala divisi dalam pelaksanaan program kerja.",
      "Menyusun program kerja Dies Natalis HIMASIF dan mengkoordinasi lomba tingkat nasional.",
      "Memberikan dukungan serta melakukan evaluasi rutin terhadap kinerja setiap divisi.",
    ],
    type: "organization",
  },
  {
    title: "Anggota Medinfo",
    company: "Badan Eksekutif Mahasiswa (BEM) Teknik - UNIB",
    period: "Apr 2021 - Mar 2022",
    description: [
      "Mendesain lebuh dari 20 pamflet dan postingan Instagram untuk berbagai kegiatan.",
      "Membuat desain spanduk untuk acara-acara besar organisasi.",
      "Mendokumentasikan lebih dari 15 kegiatan dan acara dalam bentuk foto dan video.",
    ],
    type: "organization",
  },
]

export default function Experience() {
  const [experienceType, setExperienceType] = useState("work")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Experience</h2>

          <div className="max-w-4xl mx-auto">
            <div className="flex mb-8">
              <button
                onClick={() => setExperienceType("work")}
                className={`flex-1 py-2 border-b-2 ${
                  experienceType === "work"
                    ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                    : "border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                } font-medium transition-colors`}
              >
                <div className="flex items-center justify-center">
                  <Briefcase className="mr-2 h-5 w-5" />
                  <span>Work Experience</span>
                </div>
              </button>
              <button
                onClick={() => setExperienceType("organization")}
                className={`flex-1 py-2 border-b-2 ${
                  experienceType === "organization"
                    ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                    : "border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                } font-medium transition-colors`}
              >
                <div className="flex items-center justify-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>Organizational Experience</span>
                </div>
              </button>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform md:translate-x-px"></div>

              {/* Experience items */}
              {workExperience
                .filter((exp) => exp.type === experienceType)
                .map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute top-0 ${
                        index % 2 === 0 ? "md:-left-2 left-0" : "md:-left-2 left-0"
                      } w-4 h-4 rounded-full bg-gray-900 dark:bg-white`}
                    ></div>

                    {/* Content */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm ml-6 md:ml-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{exp.company}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
