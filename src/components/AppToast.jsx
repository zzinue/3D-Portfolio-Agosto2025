import {Toaster} from "react-hot-toast";

export default  function AppToast(){
    return (
        <Toaster
            position='top-right'
            toastOptions={{
                duration: 3000,
                style: {
                    background: "#1f2937",
                    color: "#fff",
                    borderRadius: "14px",
                    padding: "18px 26px",
                    fontSize: "16px",
                    fontWeight: "600",
                    minWidth: "360px",
                    maxWidth: "480px",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
                },
                success: {
                    iconTheme: {
                        primary: "#22c55e",
                        secondary: "#fff",
                    },
                },
                error:{
                    iconTheme:{
                        primary:"#ef4444",
                        secondary:"fff",
                    },
                },
            }}
            />
    )
}