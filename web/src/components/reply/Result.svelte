<script lang="typescript">
  import type { QueryResult } from "../../util/reply";
  import DefReply from "./DefReply.svelte";
  import ConformanceError from "./ConformanceError.svelte";
  import NotFoundError from "./NotFoundError.svelte";
  import NumberReply from "./NumberReply.svelte";
  import GenericError from "./GenericError.svelte";
  import SearchReply from "./SearchReply.svelte";
  import UnitsForReply from "./UnitsForReply.svelte";
  import UnitListReply from "./UnitListReply.svelte";
  import SubstanceReply from "./SubstanceReply.svelte";
  import ConversionReply from "./ConversionReply.svelte";
  import FactorizeReply from "./FactorizeReply.svelte";
  import DateReply from "./DateReply.svelte";
  import DurationReply from "./DurationReply.svelte";

  export let value: QueryResult;
</script>

{#if value.type == 'number'}
  <NumberReply {value} />
{:else if value.type == 'def'}
  <DefReply {value} />
{:else if value.type == 'search'}
  <SearchReply {value} />
{:else if value.type == 'unitsFor'}
  <UnitsForReply {value} />
{:else if value.type == 'unitList'}
  <UnitListReply {value} />
{:else if value.type == 'substance'}
  <SubstanceReply {value} />
{:else if value.type == 'conversion'}
  <ConversionReply {value} />
{:else if value.type == 'factorize'}
  <FactorizeReply {value} />
{:else if value.type == 'date'}
  <DateReply {value} />
{:else if value.type == 'duration'}
  <DurationReply {value} />
{:else if value.type == 'notFound'}
  <NotFoundError {value} />
{:else if value.type == 'conformance'}
  <ConformanceError {value} />
{:else if value.type == 'generic'}
  <GenericError {value} />
{:else}
  <h3>Unknown result type</h3>
  <pre>{JSON.stringify(value, null, 2)}</pre>
{/if}
