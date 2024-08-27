import iconStyle from './iconStyle';

const EditIcon = (props: iconStyle) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" {...props}>
      <path
        fill="#888"
        d="M15.5574 2.17124c-.318-.10332-.6605-.10332-.9785 0-.2268.0737-.4021.19904-.5439.31939-.13.11036-.2726.253-.4224.40287l-.0176.01755L2.58203 13.924v3.4912h3.49122L17.0862 6.40227l.0176-.01754c.1498-.14984.2925-.29246.4028-.42246.1204-.14176.2457-.31706.3194-.54387.1033-.318.1033-.66055 0-.97855-.0737-.2268-.199-.4021-.3194-.54386-.1103-.13-.253-.27261-.4028-.42244l-.5801-.58003c-.1498-.14988-.2924-.29252-.4224-.40289-.1418-.12035-.3171-.24569-.5439-.31939Zm-.5482 1.44691c.0325-.03255.0853-.03255.1179 0l1.252 1.25204c.0325.03255.0325.08531 0 .11785L5.45192 15.9152h-1.3699v-1.3699L15.0092 3.61815Z"
      />
    </svg>
  );
};

export default EditIcon;