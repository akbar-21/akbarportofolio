import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Akbar Suderajad</h3>
            <p className="text-gray-400">Information Systems Graduate | Web Developer| IT Support | Technical Support</p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </a>
            <a href="linkedin.com/in/akbarsuderajad" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="instagram.com/akbar_suderajad" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Akbar Suderajad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
