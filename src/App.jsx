

// Components
import { Editor, Preview, UploadZone, AutoCompleteMention } from './components';



const App = () => {

    return (
        <div>
            <h4>Copy image from clipboard</h4>
            <Editor />

            <h4>Swap between editing and preview</h4>
            <Preview />

            <h4>Drag and Drop Files</h4>
            <UploadZone />

            <h4>Mention Users</h4>
            <AutoCompleteMention />
        </div>
    );
};

export default App;
