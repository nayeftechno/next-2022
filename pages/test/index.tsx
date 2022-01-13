import FirstComponent from "@/components/FirstComponent";
import SecondComponent from "@/components/SecondComponent";
import ThirdComponent from "@/components/ThirdComponent";
export default function TestPage(){
    return(<div className="row">
        <div className="col-md-3">
            <FirstComponent/>
        </div>
        <div className="col-md-3">
            <SecondComponent/>
        </div>
        <div className="col-md-3">
            <ThirdComponent/>
        </div>
        <div className="col-md-3">
        </div>
    </div>);
};