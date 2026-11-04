import Link from "next/link";

const ConfirmationPage = () => {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-semibold mb-4">Thank you for your order!</h1>
      <p className="text-[#7B807B] mb-8">Your groceries are on their way.</p>
      <Link href="/groceries" className="border border-[#5F6B5F] text-[#5F6B5F] hover:bg-[#5F6B5F] hover:text-white px-6 py-3 rounded-lg transition-colors duration-300">
        Continue shopping
      </Link>
    </main>
  );
};

export default ConfirmationPage;
