// routes/countdown.tsx

/** @jsx h */
import { h } from "preact";
import Countdown from "../islands/Countdown.tsx";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Page() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <p>
            The big event is happening <Countdown target={date.toISOString()} />.
            <img
                src="/logo.svg"
                height="100px"
                alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <p className={tw`my-6`}>
                Welcome to `fresh`. Try update this message in the ./routes/index.tsx
                file, and refreshing.
            </p>
            <Counter start={3} />
        </p>
    );
}
