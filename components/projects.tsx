"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Video, Camera, Code, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const achievements = [
  {
    title: "Juara 1 Video Kreatif Tema BK",
    year: "2021",
    description:
      "Memenangkan juara 1 dalam lomba video kreatif bertema Bimbingan dan Konseling (BK) yang diselenggarakan oleh BK Expo Universitas Bengkulu. Video yang ditampilkan mengangkat isu edukatif dengan pendekatan naratif yang kuat dan visual yang komunikatif.",
    category: "video",
    icon: <Video className="h-6 w-6" />,
    certificateUrl: "/certificates/video-kreatif-bk.pdf", // URL placeholder
  },
  {
    title: "Juara 2 COS 1.0 Photography",
    year: "2021",
    description:
      "Meraih juara 2 dalam lomba fotografi Celebration of Science (COS) 1.0 yang diselenggarakan oleh Himpunan Mahasiswa Fisika Universitas Bengkulu. Karya yang dilombakan mengangkat tema ilmiah dengan pendekatan visual yang kreatif dan inspiratif.",
    category: "photo",
    icon: <Camera className="h-6 w-6" />,
    certificateUrl: "/certificates/cos-photography.pdf", // URL placeholder
  },
  {
    title: "Juara 3 Siclus Photography",
    year: "2022",
    description: "Meraih juara 3 dalam kompetisi fotografi nasional SICLUS yang diselenggarakan oleh Universitas Hasanuddin, Makassar, tahun 2023. Karya yang diangkat menonjolkan kreativitas visual dan pesan tematik yang relevan dengan isu lingkungan dan sains.",
    category: "photo",
    icon: <Camera className="h-6 w-6" />,
    certificateUrl: "/certificates/siclus-photography.pdf", // URL placeholder
  },
  {
    title: "10 Besar Video Story Telling",
    year: "2022",
    description:
      "Berhasil masuk 10 besar dalam lomba Video Storytelling yang diselenggarakan oleh Kampung Dongeng Indonesia. Video yang dipresentasikan menggabungkan elemen cerita yang kreatif dengan teknik visual yang menarik.",
    category: "video",
    icon: <Video className="h-6 w-6" />,
    certificateUrl: "/certificates/story-telling.pdf", // URL placeholder
  },
  {
    title: "Pelatihan Junior Graphic Designer",
    year: "2021",
    description:
      "Mengikuti pelatihan Junior Graphic Designer yang diselenggarakan oleh BPPTIK dari KOMINFO belajar mengenai pelatihan dasar desain grafis dan perangkat lunak.",
    category: "training",
    icon: <Award className="h-6 w-6" />,
    certificateUrl: "/certificates/junior-graphic-designer.pdf", // URL placeholder
  },
  {
    title: "Juara 2 Videography",
    year: "2023",
    description:
      "Meraih juara 2 dalam lomba videografi tingkat mahasiswa yang diselenggarakan oleh Penmas Competition tingkat nasional, Universitas Ibn Khaldun Bogor.",
    category: "video",
    icon: <Video className="h-6 w-6" />,
    certificateUrl: "/certificates/videography-penmas.pdf", // URL placeholder
  },
  {
    title: "Pelatihan Junior Web Developer",
    year: "2024",
    description:
      "Mengikuti pelatihan Junior Web Developer yang diselenggarakan oleh digitalent dari KOMINFO dengan membangun suatu proyek akhir.",
    category: "training",
    icon: <Code className="h-6 w-6" />,
    certificateUrl: "/certificates/junior-web-developer.pdf", // URL placeholder
  },
  {
    title: "Juara 1 Video Dokumenter",
    year: "2021",
    description: "Memenangkan lomba video dokumenter yang diselenggarakan oleh HMJ Poltekkes Kemenkes Bengkulu.",
    category: "video",
    icon: <Video className="h-6 w-6" />,
    certificateUrl: "/certificates/video-dokumenter.pdf", // URL placeholder
  },
  {
    title: "Website Sistem Informasi Akademik",
    year: "2023",
    description:
      "Mengembangkan website sistem informasi akademik untuk sekolah menengah dengan fitur manajemen siswa, nilai, dan absensi.",
    category: "portfolio",
    icon: <Code className="h-6 w-6" />,
    certificateUrl: null,
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Aplikasi Manajemen Inventaris",
    year: "2023",
    description:
      "Membuat aplikasi berbasis web untuk manajemen inventaris perusahaan dengan fitur tracking barang dan laporan stok.",
    category: "portfolio",
    icon: <Code className="h-6 w-6" />,
    certificateUrl: null,
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Landing Page UMKM",
    year: "2024",
    description:
      "Merancang dan mengembangkan landing page responsif untuk UMKM lokal dengan fokus pada UX dan konversi pengunjung.",
    category: "portfolio",
    icon: <Code className="h-6 w-6" />,
    certificateUrl: null,
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredAchievements =
    filter === "all"
      ? achievements.filter((item) => item.category !== "portfolio")
      : achievements.filter((item) => item.category === filter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Achievements & Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "video" ? "default" : "outline"}
              onClick={() => setFilter("video")}
              className={filter === "video" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : ""}
            >
              <Video className="h-4 w-4 mr-2" />
              Video
            </Button>
            <Button
              variant={filter === "photo" ? "default" : "outline"}
              onClick={() => setFilter("photo")}
              className={filter === "photo" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : ""}
            >
              <Camera className="h-4 w-4 mr-2" />
              Photography
            </Button>
            <Button
              variant={filter === "training" ? "default" : "outline"}
              onClick={() => setFilter("training")}
              className={filter === "training" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : ""}
            >
              <Award className="h-4 w-4 mr-2" />
              Training
            </Button>
            <Button
              variant={filter === "portfolio" ? "default" : "outline"}
              onClick={() => setFilter("portfolio")}
              className={filter === "portfolio" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : ""}
            >
              <Camera className="h-4 w-4 mr-2" />
              Project Gallery
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredAchievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {item.imageUrl && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>

                  {item.certificateUrl && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Lihat Sertifikat
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[800px]">
                        <DialogHeader>
                          <DialogTitle>{item.title} - Sertifikat</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-[1.414/1] w-full bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                          <iframe
                            src={item.certificateUrl}
                            className="w-full h-full"
                            title={`Sertifikat ${item.title}`}
                          />
                        </div>
                        <div className="flex justify-end mt-4">
                          <Button asChild>
                            <a href={item.certificateUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Buka di Tab Baru
                            </a>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}

                  {item.imageUrl && item.category === "portfolio" && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Camera className="h-4 w-4 mr-2" />
                          Lihat Detail Proyek
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[800px]">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                        </DialogHeader>
                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                          <img src={item.imageUrl || "/placeholder.svg"} alt={item.title} className="w-full h-auto" />
                        </div>
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold mb-2">Deskripsi Proyek</h4>
                          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
