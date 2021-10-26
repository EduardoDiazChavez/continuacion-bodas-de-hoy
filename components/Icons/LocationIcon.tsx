import { FC } from "react"
import { PropsIcon } from "."

export const LocationIcon: FC<PropsIcon> = (props) => {
    return (
      <svg width={16} height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8 0C3.55417 0 0 3.49863 0 7.875C0 9.38848 0.458333 10.5574 1.25417 11.7428L7.15833 20.5611C7.3375 20.8277 7.64583 21 8 21C8.35417 21 8.66667 20.8236 8.84167 20.5611L14.7458 11.7428C15.5417 10.5574 16 9.38848 16 7.875C16 3.49863 12.4458 0 8 0ZM8 12.2473C5.54583 12.2473 3.55417 10.2867 3.55417 7.8668C3.55417 5.44688 5.54583 3.48633 8 3.48633C10.4542 3.48633 12.4458 5.44688 12.4458 7.8668C12.4458 10.2867 10.4542 12.2473 8 12.2473Z" fill="currentColor" />
      </svg>
    )
  }