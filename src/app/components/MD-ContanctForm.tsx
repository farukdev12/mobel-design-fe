import React from 'react';
import MdInput from "@/app/components/MD-Input";
import MDButton from "@/app/components/MD-Button";

const MdContanctForm = () => {
    return (
        <div className={'flex flex-col gap-3 bg-secondary p-5 rounded-lg'}>
            <h3 className={'text-xl text-center font-semibold text-white'}>İletişim Formu</h3>
            <div className={'flex justify-between gap-2'}>
                <MdInput size={'small'} label={'Ad'} background={'gray'} optional={true} />
                <MdInput size={'small'} label={'Soyad'} background={'gray'} optional={true} />
            </div>
            <MdInput size={'small'} fullWidth={true} label={'Email'} background={'gray'} optional={true} />
            <MdInput size={'small'} fullWidth={true} label={'Mesaj'} background={'gray'} optional={true} multiline={true} minRows={4} characterLimit={300} />
            <div className={'flex justify-center gap-2'}>
                <MDButton isLinearBg={false} text={'Gönder'} />
            </div>
        </div>
    );
};

export default MdContanctForm;