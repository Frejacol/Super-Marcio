const InfoCard = ({ icon, title, text }) => {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-[#BAC4BA] p-6 text-white">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff3e9] text-4xl text-black">
        {icon}
      </div>
      <h3 className="text-center text-2xl font-bold">{title}</h3>
      <p>{text}</p>
    </article>
  );
};

export default InfoCard;
