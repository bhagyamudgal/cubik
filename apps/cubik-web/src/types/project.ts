import { Prisma } from '@cubik/database';
export type searchProjectsType = Prisma.ProjectsModelGetPayload<{
  select: {
    id: true;
    name: true;
    logo: true;
    owner: {
      select: {
        username: true;
      };
    };
  };
}>;
