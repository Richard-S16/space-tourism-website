import DestinationNav from "../components/DestinationNav";

export default async function Destination() {
  return (
    <div className="h-screen bg-destination-mobile bg-repeat-round pt-[88px] 3xl:bg-cover">
      <DestinationNav className="mt-[26px]" />
    </div>
  );
}
