const InfoCard = ({ icon, title, text }) => {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-[#939B93] p-6 text-white">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff3e9] text-4xl text-[#494c49] mb-2.5">
        {icon}
      </div>
      <h3 className="text-center text-2xl font-bold">{title}</h3>
      <p className="text-center">{text}</p>
    </article>
  );
};

export default InfoCard;
