import { toast } from "react-toastify";


const Subscrib = () => {
    const notify = () => toast.success("Thank you for subscribing to our newsletter");
    const handleSubscribe = e =>{
        e.preventDefault()
        const subscribe = e.target.email.value;
        if(subscribe){
            notify()
        }

    }
    return (
        <div className=" max-w-2xl mx-auto bg-slate-300 text-center mb-3">
            <h3 className="text-3xl font-bold p-3">NewsLetter</h3>
            <form onSubmit={handleSubscribe}>
                
                <input className="border border-black rounded-lg py-2 px-3" placeholder="Your email address" type="email" name="email" /><br />
                <input className="bg-red-600 text-white font-bold px-6 py-2 mb-5 rounded-lg my-3" type="submit" value="Submit" name="" id="" />
            </form>
            
        </div>
    );
};

export default Subscrib;