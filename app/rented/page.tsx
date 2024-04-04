import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUsers";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unathorized" subtitle="Please log-in" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    userId: currentUser?.id,
  });
  
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No rented car information available"
          subtitle="Rent your first car now!"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};  

export default TripsPage;