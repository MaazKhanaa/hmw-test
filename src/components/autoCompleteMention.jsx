import { useState } from "react";

import { Mention, MentionsInput } from "react-mentions";


// Mention Style
import mentionStyle from "../styles/autoCompleteMention";


const users = [
    {
        id: "ali",
        display: "Ali",
    },
    {
        id: "usman",
        display: "Usman",
    },
    {
        id: "ilyas",
        display: "Ilyas",
    },
];


export default function AutoCompleteMention () {
    const [value, setValue] = useState("");


    const onChange = (e) => {
        console.log("onChange", e);
        setValue(e.target.value);
    };
    const onAdd = (id, display) => {
        console.log("onAdd", id, display);
    };


    return (
        <div className="single-line">
            <MentionsInput
                value={value}
                onChange={onChange}
                placeholder={"Enter your comment"}
                a11ySuggestionsListLabel={"Suggested mentions"}
                style={mentionStyle}
            >
                <Mention
                    trigger="@"
                    data={users}
                    renderSuggestion={(suggestion, search, highlightedDisplay) => (
                        <div className="mention-suggestion">{highlightedDisplay}</div>
                    )}
                    onAdd={onAdd}
                    style={{ backgroundColor: "#cee4e5" }}
                />
            </MentionsInput>
        </div>
    );
}
