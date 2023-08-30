import { ReactNode } from "react"
import { createPortal } from "react-dom"


interface PortalProps {
    children: ReactNode
    element?: Element
}

function Portal({children, element = document.body}:PortalProps) {
  return (
    createPortal(children, element)
  )
}

export default Portal