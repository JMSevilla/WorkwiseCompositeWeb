/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import { CmsDto } from "@/core/types/cms";

export const parseContents = (
  contentCms: CmsDto[],
  desiredContentKey: string
) => {
  const matchingItem = contentCms.find(
    (item) => item.contentKey === desiredContentKey
  );
  if (matchingItem) {
    switch (matchingItem.contentKey) {
      case "home":
        return <h3>Home</h3>;
      case "account-setup":
        return <h3>account setup</h3>;
      default:
        return <div>Unknown content key</div>;
    }
  } else {
    return <div>Content with key {desiredContentKey} not found</div>;
  }
};
