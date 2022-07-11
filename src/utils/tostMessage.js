import toast from "react-hot-toast";

export const successMsg = (msg) => {
    toast(msg, {
        duration: 4000,
        position: 'top-center',
        // Styling
        style: {
            background: "#2CB46B",
            color: "#fff"
        },
        className: 'bg-success',
        // Custom Icon
        // icon: '👏',
        // Change colors of success/error/loading icon
        iconTheme: {
            primary: 'red',
            secondary: '#000',
        },
        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}
export const errorMsg = (msg) => {
    toast(msg, {
        duration: 4000,
        position: 'top-center',
        // Styling
        style: {
            background: "#FF5D5D",
            color: "#fff"
        },
        className: 'bg-success',
        // Custom Icon
        // icon: '👏',
        // Change colors of success/error/loading icon
        iconTheme: {
            primary: 'red',
            secondary: '#000',
        },
        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
}
