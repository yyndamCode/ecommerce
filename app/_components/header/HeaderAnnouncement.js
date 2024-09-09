import Link from "next/link";

function HeaderAnnouncement() {
  return (
    <div className="hidden  md:block bg-primary-20 py-2 text-primary-10 ">
      <div className="flex justify-between desktop:max-w-screen-2xl px-[40px] mx-auto w-full desktop:grid desktop:grid-cols-4 ">
        <div className="flex items-center  col-start-2 col-span-2 ">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href={"/"} className="underline underline-offset-1">
            <p>Shop Now</p>
          </Link>
        </div>
        <div className="flex justify-end col-span-1 ">
          <p>English</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderAnnouncement;
