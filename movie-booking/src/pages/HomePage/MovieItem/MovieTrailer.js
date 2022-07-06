import ModalVideo from "react-modal-video";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_TRAILER } from "../../../redux/constant/homePageContants";
export default function MovieTrailer() {
  const open = useSelector((state) => state.homePageReducer.isOpen);
  const trailerID = useSelector((state) => state.homePageReducer.trailerID);
  const dispatch = useDispatch();
  return (
    <div>
      <ModalVideo
        isOpen={open}
        autoplay
        videoId={trailerID}
        onClose={() =>
          dispatch({
            type: CLOSE_TRAILER,
            payload: "",
          })
        }
      />
    </div>
  );
}
