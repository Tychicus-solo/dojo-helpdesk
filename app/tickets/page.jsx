import { Suspense } from "react";
import TicketList from "./TicketList";
import loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
