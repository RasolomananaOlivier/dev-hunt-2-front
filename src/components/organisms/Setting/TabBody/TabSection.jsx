import PasswordForm from "./PasswordForm";
import TagsForm from "./TagsForm";
import { GeneralForm } from "./GeneralForm";

export default function TabSection(selected) {
  switch (selected.value) {
    case 0:
      return <GeneralForm />;
    case 1:
      return <PasswordForm />;
    default:
      return <TagsForm />;
  }
}
