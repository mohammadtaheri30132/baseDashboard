import React from 'react';
import Click from "../../components/share/Click";
import Modal from "react-modal";
import swal from '@sweetalert/with-react';

const TemplateComponents = () => {
    const [modal,setShowModal]=React.useState(false)

    return (
     <div>
         <Modal
             closeTimeoutMS={500}
             isOpen={modal}
             shouldCloseOnOverlayClick={true}
             onRequestClose={()=>setShowModal(false)}
         >
             <div className='p-10 '>

             </div>
         </Modal>
         <Click className='bg-btn' onClick={()=>setShowModal(true)}>
             مودال
         </Click>
     </div>
    );
};

export default TemplateComponents;
