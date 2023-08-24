/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */
import { initializeStorage } from "../config/initializeStorage";

export const useAccessToken = () =>
  initializeStorage<string | undefined>("AT", undefined);

export const useRefreshToken = () =>
  initializeStorage<string | undefined>("RT", undefined);