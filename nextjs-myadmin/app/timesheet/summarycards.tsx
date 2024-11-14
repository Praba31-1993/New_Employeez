
import Image from 'next/image';
export default function Summarycards({ leaveData }: any) {
    return (

        <div className="summarydetails ps-3 py-2">
            <div className="p-1 icons">
                <Image src={leaveData?.img} alt={""} width={0} height={0} />
            </div>
            <h5 className="mt-2  textheader mb-0">{leaveData?.name}</h5>
            <p className="para mt-1 mb-0 textheader">{leaveData?.noOfLeave}</p>
        </div>

    );
}