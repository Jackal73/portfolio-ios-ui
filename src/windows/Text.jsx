import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const TextFile = () => {
  const {
    windows: {
      txtfile: { data },
    },
  } = useWindowStore();

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2 className="">{name}</h2>
      </div>

      <div className="p-5 space-y-7">
        {image && <img src={image} alt={name} className="w-20 rounded-full" />}

        {subtitle && <h1 className="font-bold">{subtitle}</h1>}

        {Array.isArray(description) &&
          description.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
