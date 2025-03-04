"use client";

export default function GlobalError({ error, reset }) {
    return (
    <html>
        <body>
            <h2>Hey! You broke the page, what gives!</h2>
            <h2>...Just kidding! Try resetting it.</h2>
            <button onClick={() => reset()}>Try again</button>
        </body>
    </html>
    );
}