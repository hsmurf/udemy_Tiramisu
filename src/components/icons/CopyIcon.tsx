import iconStyle from './iconStyle';

const CopyIcon = (props: iconStyle) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" {...props}>
      <path
        fill="#888"
        d="M3.80854 1.75c-.21194-.00002-.41364-.00004-.58361.01385-.18534.01514-.39793.05046-.61041.15873-.29793.1518-.54014.39401-.69194.69194-.10827.21248-.14359.42507-.15873.61041-.01389.16997-.01387.37167-.01385.58361v9.04956c-.00002.212-.00004.4137.01385.5836.01514.1854.05046.398.15873.6105.1518.2979.39401.5401.69194.6919.21248.1083.42507.1436.61041.1587.16997.0139.37167.0139.58361.0139h9.04956c.212 0 .4137 0 .5836-.0139.1854-.0151.398-.0504.6104-.1587.298-.1518.5402-.394.692-.6919.1083-.2125.1436-.4251.1587-.6105.0139-.1699.0139-.3716.0139-.5836V3.80853c0-.21193 0-.41363-.0139-.5836-.0151-.18534-.0504-.39793-.1587-.61041-.1518-.29793-.394-.54014-.692-.69194-.2124-.10827-.425-.14359-.6104-.15873-.1699-.01389-.3716-.01387-.5836-.01385H3.80854Zm-.55855 1.58317c0-.04602.03731-.08333.08333-.08333h9.99998c.046 0 .0833.03731.0833.08333V13.3332c0 .046-.0373.0833-.0833.0833H3.33332c-.04602 0-.08333-.0373-.08333-.0833V3.33317ZM18.2362 16.7754c.0139-.17.0138-.3717.0138-.5836V7.50032l-1.5.00033v9.16665c0 .046-.0373.0833-.0833.0833H7.50003l-.00001 1.4997h8.69148c.2119 0 .4136.0001.5836-.0138.1853-.0152.3979-.0505.6104-.1588.2979-.1517.5401-.394.6919-.6919.1083-.2125.1436-.4251.1588-.6104Z"
      />
    </svg>
  );
};

export default CopyIcon;