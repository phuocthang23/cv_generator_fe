type Props = {};

const JobDetail = (props: Props) => {
  return (
    <div className="max-w-[1320px] border border-collapse mt-[35.5px] mx-auto">
      <div className="left-title flex items-center">
        <img
          className="w-[96px] mr-6"
          src="https://s3-alpha-sig.figma.com/img/4996/2b78/4c5dac1319d7f67c8231e4d7e01932bc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A2QQiN4lqg4d1Jjj9CpUdc6za1AH5Udu3hvgDKi6GPnZlbTwvpIXlG2z693vljXDg-QMar8iSN2E1WOPfBvPliJXH44~gTxvHOc2SdqMgPQvJcsLB~pV2U3~q8sfoZkBDfyXlWpdLJYXljZLs2TAJIFH6-vXUbNjm6r1Hf6oaOaPgiNRTCaV-h04tLMph1-VmSuv79TfxdmfOJ0JUqowKE5cJob1lr46WADUDRYK0lrdguJm2Lnw2eS1GJpJMq57VxfLt7qa3Tbt9uvZC4tMxx7j6BW82PUoYQ5sjS1bCy9Yjp5F7vQqRFSx-OSQFLNhKat3cdsG8Nv255SDvclUQQ__"
          alt=""
        />
        <div className="heading ">
          <p className="text-2xl">Senior UX Designer</p>
          <p className="text-[18px] mt-3">
            at FPT Software <span className="mx-2">FULL-TIME</span>{" "}
            <span>Featured</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
