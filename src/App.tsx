import './App.css'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Linkedin,
  Github,
  Twitter,
  Instagram
} from "lucide-react/"

const linkedInHandle = 'https://www.linkedin.com/in/suryakant-agrawal-7719191b8/'
const githubHandle = 'https://github.com/suryaa62'
const twitterHandle = 'https://x.com/Pridevta'
const instagramHandle = 'https://www.instagram.com/suryakanttt_'

const redirectTo = (url: string) => {
  window.open(url, '_blank')
}

function App() {

  return (
    <div className='flex justify-center h-screen items-center'>
    <Card className='w-[300px] h-max '>
      <CardHeader>
        <CardTitle>Hey There! </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Hi, I am <b>Suryakant Agrawal</b>. This is my personal website. Its in progress. You can reach out to me on my personal handles.
        </CardDescription>
      </CardContent >
      
      <CardFooter className='flex justify-between'>
      <Button variant={"outline"} size={"icon"} onClick={() => redirectTo(linkedInHandle)}>
      <Linkedin />
      </Button >
      <Button variant={"outline"} size={"icon"} onClick={() => redirectTo(githubHandle)}>
      <Github />
      </Button>
      <Button variant={"outline"} size={"icon"} onClick={() => redirectTo(instagramHandle)}>
      <Instagram />
      </Button>
      <Button variant={"outline"} size={"icon"} onClick={() => redirectTo(twitterHandle)}>
      <Twitter />
      </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default App
