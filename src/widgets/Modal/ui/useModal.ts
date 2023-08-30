import { useEffect, useRef, useState } from "react"
import { ANIMATION_DELAY } from "./constants"

interface props {
    closeModal: () => void,
    isVisible: boolean
}

export const useModal = ({closeModal, isVisible}: props) => {
  const [closing, setClosing] = useState(false)

  const handleClickModal = (e:React.MouseEvent) => {
    if(isVisible){
      e.stopPropagation()
    }
  }
  
  
  const onEscape = (e: KeyboardEvent) => {
    if(e.key === "Escape"){
      closeModalWithAnim()
    }
  }
  
  const closeModalWithAnim = () => {
    setClosing(true)
  }
  
  useEffect(() => {
    window.addEventListener("keydown", onEscape)    
  
      
    return () => {
      window.removeEventListener("keydown", onEscape)
    }
      
  }, [])

  const timer = useRef<ReturnType<typeof setTimeout>>()
  
  
  useEffect(() => {
    if(timer.current) {
      clearTimeout(timer.current)
    }
   
    timer.current = setTimeout(() => {
      closeModal()
      setClosing(false)
    }, ANIMATION_DELAY)
  
  }, [closing])


  return {
    closing,
    handleClickModal,
    closeModalWithAnim
  }
}