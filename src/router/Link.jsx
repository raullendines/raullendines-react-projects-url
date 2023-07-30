/* eslint-disable react/prop-types */
import { BUTTON, EVENTS } from "../js/utils/constants";

export function navigate (href){
    globalThis.history.pushState({}, '', href)
  
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    globalThis.dispatchEvent(navigationEvent)
}


export function Link({ target, to, ...props}){
    const handleClick = (event) => {

        const isMainEvent = event.button === BUTTON.PRIMARY
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === 'undefined' || target === '_self'
        
        if (isMainEvent && isManageableEvent & !isModifiedEvent) {
            event.preventDefault()
            navigate(to)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props}/>
}