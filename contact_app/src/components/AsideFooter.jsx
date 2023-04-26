import { FcContacts } from 'react-icons/fc';

export function AsideFooter(){
    return (
        <footer className="aside__footer flex ai-cent jc-cent gap-sm pad-sm">
            <FcContacts />
            <h4 className='fw-500'>Contacts</h4>
        </footer>
    )
}